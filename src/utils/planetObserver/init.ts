export async function initObserver(
  ref: HTMLCanvasElement | null,
  scale: number,
  angleY: number,
  angleX: number,
  displayMode: string,
  date: Date,
) {
  if (!navigator.gpu || !ref) throw new Error('WebGPU is not supported');

  const adapter = await navigator.gpu.requestAdapter();
  if (!adapter) throw new Error('Adapter is not found');

  const device = await adapter.requestDevice();
  const context = ref.getContext('webgpu');
  if (!context) throw new Error('WebGPU context is not found');

  const format = navigator.gpu.getPreferredCanvasFormat();

  context.configure({ device, format });

  const vertices = new Float32Array([
    -0.8, -0.8, 0.8, -0.8, 0.8, 0.8,

    -0.8, -0.8, 0.8, 0.8, -0.8, 0.8,
  ]);
  const vertexBuffer = device.createBuffer({
    label: 'Vertex Buffer',
    size: vertices.byteLength,
    // eslint-disable-next-line no-bitwise,no-undef
    usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST,
  });
  device.queue.writeBuffer(vertexBuffer, 0, vertices);

  const cellShaderModule = device.createShaderModule({
    label: 'Cell Shader',
    code: `
      @vertex
      fn vertexMain(@location(0) pos: vec2f) ->
        @builtin(position) vec4f {
        return vec4f(pos, 0, 1);
      }
  
      @fragment
      fn fragmentMain() -> @location(0) vec4f {
        return vec4f(1, 0, 0, 1);
      }
    `,
  });

  const vertexBufferLayout = {
    arrayStride: 8,
    attributes: [
      {
        format: 'float32x2',
        offset: 0,
        shaderLocation: 0,
      },
    ],
  };

  const cellPipeline = device.createRenderPipeline({
    label: 'Cell Pipeline',
    layout: 'auto',
    vertex: {
      module: cellShaderModule,
      entryPoint: 'vertexMain',
      // eslint-disable-next-line no-undef
      buffers: [vertexBufferLayout] as Iterable<GPUVertexBufferLayout | null>,
    },
    fragment: {
      module: cellShaderModule,
      entryPoint: 'fragmentMain',
      // eslint-disable-next-line no-undef
      targets: [format] as Iterable<GPUColorTargetState | null>,
    },
  });

  const encoder = device.createCommandEncoder();
  const pass = encoder.beginRenderPass({
    colorAttachments: [
      {
        view: context.getCurrentTexture().createView(),
        loadOp: 'clear',
        clearValue: { r: 0.1, g: 0.1, b: 0.15, a: 1 },
        storeOp: 'store',
      },
    ],
  });

  pass.setPipeline(cellPipeline);
  pass.setVertexBuffer(0, vertexBuffer);
  pass.draw(4, 1, 0, 0);

  pass.end();

  const commandBuffer = encoder.finish();
  device.queue.submit([commandBuffer]);
  device.queue.submit([encoder.finish()]);

  return { scale, angleY, angleX, displayMode, date, ref };
}
