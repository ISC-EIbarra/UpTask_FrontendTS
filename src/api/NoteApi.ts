import api from '@/lib/axios';
import { isAxiosError } from 'axios';
import { NoteFormData, Project, Task } from '../types';

type NoteAPIType = {
  formData: NoteFormData;
  projectId: Project['_id'];
  taskId: Task['_id'];
};

export async function createNote({
  projectId,
  taskId,
  formData,
}: Pick<NoteAPIType, 'projectId' | 'taskId' | 'formData'>) {
  try {
    const { data } = await api.post<string>(
      `/projects/${projectId}/tasks/${taskId}/notes`,
      formData
    );
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}
