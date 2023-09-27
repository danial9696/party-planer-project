export default interface Props {
  title: string;
  subtitle?: string;
  button: {
    text: string;
    onClick: () => void;
    size?: 'sm' | 'lg';
  };
}
