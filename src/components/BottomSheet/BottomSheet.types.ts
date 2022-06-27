export interface BottomSheetProps {
  children: React.ReactNode;
  show: boolean;
  height?: number;
  onClose?: () => void;
}
