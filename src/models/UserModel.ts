export interface UserModel {
  id: number;
  name: string;
  email: string;
  phone: string;
  role: 'admin' | 'doctor' | 'patient';
  createdAt: string;
  updatedAt: string;
}
