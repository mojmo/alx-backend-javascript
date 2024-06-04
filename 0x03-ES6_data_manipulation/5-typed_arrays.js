export default function createInt8TypedArray(length, position, value) {
  // Validate position within the array bounds
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  // Create an ArrayBuffer with appropriate size for Int8 values
  const buffer = new ArrayBuffer(length);

  // Get a view on the buffer as an Int8Array
  const int8Array = new Int8Array(buffer);

  int8Array[position] = value;

  return new DataView(buffer);
}
