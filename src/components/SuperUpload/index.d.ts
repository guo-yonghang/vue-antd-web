/**
 * `SuperUploadProps` interface for the SuperUpload component.
 */
export interface SuperUploadProps {
  modelValue?: (string | Record<string, any>)[];
  type?: 'image' | 'file';
  limit?: number;
}
