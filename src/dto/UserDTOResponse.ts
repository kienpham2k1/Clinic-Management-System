export interface UserDTORequest {
  name: string;
  email: string;
  phone?: string;
  password: string;
  role: 'doctor' | 'patient'; // admin không được tự tạo
}
