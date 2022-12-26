import withAuth from "next-auth/middleware";

export default withAuth({
  middleware: (req) => {
    console.log("TESTE");
  },
  callbacks: {
    authorized: ({ token }) => !!token,
  },
});
