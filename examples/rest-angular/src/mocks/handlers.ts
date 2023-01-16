import { rest } from 'msw';

export const handlers = [
  rest.post('/login', (req, res, ctx) => {
    const { username } = req.body as any;

    return res(
      ctx.json({
        id: 'f79e82e8-c34a-4dc7-a49e-9fadc0979fda',
        username,
        firstName: 'John',
        lastName: 'Maverick'
      })
    );
  }),
  rest.get('/file', async (req, res, ctx) => {
    const blob = new Blob(['123 a file i see'], {type: 'text'});
    return res(
      ctx.body(blob),
      ctx.set('Content-Type', 'application/octet-stream')
    )
  })
];
