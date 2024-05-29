export default function guardrail(mathFunction) {
  const queue = [];

  try {
    const matchValue = mathFunction();
    queue.push(matchValue);
  } catch (err) {
    queue.push(err.toString());
  } finally {
    queue.push('Guardrail was processed');
  }

  return queue;
}
