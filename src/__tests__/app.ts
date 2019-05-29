import server from '../app'

describe('Hello world server', () => {
    it('should response with hello world text', async  () => {
        const result = await server.inject({
            method: "GET",
            url: '/'
        })

        expect(result.statusCode).toBe(200)
        expect(result.payload).toBe('Hello, World!')
    })
})