import { rest } from 'msw'

export const handlers = [
  rest.get("http://localhost:4040/test-hook", (req, res, ctx) => {
    return res(
      ctx.json({
        status: 200,
        data: { name: 'Jose', role: "user" },
        message: "Successfull.",
      })
    )
  }),
]
