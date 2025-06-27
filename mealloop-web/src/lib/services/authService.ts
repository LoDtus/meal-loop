import instance from '../utils/apiUtils';

export async function checkEmailExists(email: string) {
    const response = await instance.get(`/api/auth/check-email-exists`, {
        params: {
            email: email.trim(),
        }
    });
    return response.data;
};

// await request("/api/messages", {
//   method: "post",
//   body: {
//     chatroomId: "abc123",
//     content: "Hello world",
//   }
// });
// await request("/api/chatrooms", {
//   method: "get",
//   params: { userId: "user-123" }
// });
// await request("/api/upload", {
//   method: "post",
//   body: formData
// });