import { 
    renderHook, 
    act 
} from "@testing-library/react";
import { useRequest } from "./useRequest";
import { rest } from 'msw'
import { server } from '@/mocks/server';

test("should test the handleRequest method with success response", async () => {
    const { result } = renderHook(() => useRequest());
    expect(result.current.alert.open).toBe(false);

    await act(async () => {
        const data = await result.current.handleRequest({
            subresource: "http://localhost:4040", 
            endpoint: "/test-hook",
            succesAlert: true,
        });
        expect(data.name).toEqual("Jose");
        expect(data.role).toEqual("user");
    })
    expect(result.current.alert.open).toBe(true);
    expect(result.current.alert.severity).toEqual("success");
    expect(result.current.alert.message).toEqual("Successfull.");
})

test('should test the handleRequest method with error response', async () => {
    const { result } = renderHook(() => useRequest());
    expect(result.current.alert.open).toBe(false);

    server.resetHandlers(
        rest.get("http://localhost:4040/test-hook", (req, res, ctx) => {
          return res(
            ctx.status(400),
            ctx.json({
                status: 400,
                data: null,
                message: "Error request.",
              })
        )
        })
    )

    await act(async () => {
        const data = await result.current.handleRequest({subresource: "http://localhost:4040", endpoint: "/test-hook"});
        expect(data).toBeNull();
    })

    expect(result.current.alert.open).toBe(true);
    expect(result.current.alert.severity).toEqual("error");
    expect(result.current.alert.message).toEqual("Error request.");
})