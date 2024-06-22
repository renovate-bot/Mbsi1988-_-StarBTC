export const formatAddress = (text: string, keep: [number, number] = [4, 4]) => {
  const [head, tail] = keep;

  return text.length > head + tail
    ? text.replace(text.substring(head, text.length - tail), "..")
    : text;
};
