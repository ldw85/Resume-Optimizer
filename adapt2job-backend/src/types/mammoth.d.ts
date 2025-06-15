declare module 'mammoth' {
  export function extractRawText(options: { buffer: Buffer } | { path: string }): Promise<{ value: string }>;
}
