import { Response } from 'miragejs';

export default function userRoutes() {
  this.namespace = 'api';

  this.get('/users', schema => {
    return schema.users.all();
  });

  this.post('/login', (schema, request) => {
    const { email, password } = JSON.parse(request.requestBody);
    const user = schema.users.findBy({ email });

    if (user && user.attrs.password === password) {
      return {
        token: 'fake-jwt-token',
      };
    }

    return new Response(401, {}, { error: 'Invalid credentials' });
  });
}
