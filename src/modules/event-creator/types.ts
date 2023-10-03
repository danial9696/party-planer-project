export interface EventCreatorModel {
  title: string;
  type: 'form' | 'select' | 'options';
  data: { title: string; detail?: string }[];
}
