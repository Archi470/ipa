import { AuthProvider } from "../context/AuthContext";
import { Providers } from "../reduxToolkit/provider";

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <html lang="en">
        <body>
        <Providers>
          {children}
        </Providers>
        </body>
      </html>
    </AuthProvider>
  );
}
