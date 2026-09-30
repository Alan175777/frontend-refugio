import { z } from 'zod';

export const loginSchema = z.object({
  usuario: z.string().min(1, 'El usuario es obligatorio').max(15, 'Máximo 15 caracteres'),
  contrasena: z.string().min(1, 'La contraseña es obligatoria').max(60, 'Máximo 60 caracteres'),
});
