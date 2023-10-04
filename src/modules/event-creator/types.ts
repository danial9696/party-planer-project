export interface EventCreatorModel {
  title: string;
  id: string;
  type: 'form' | 'select' | 'options';
  data: { title: string; detail?: string; value: string }[];
}
