import LinkAdmin from "@/components/LinkAdmin";
import "@/styles/globals.css";
export const metadata = {
  title: "Admin",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <div className="min-h-screen flex flex-col">
          <nav className="bg-blue-600 p-4 text-white shadow-md">
            <div className="mx-auto flex justify-between items-center">
              <div className="text-lg font-semibold">Admin Dashboard</div>
              <div>
                <LinkAdmin
                  href="profile"
                  className="text-white mr-4 hover:text-gray-200 transition"
                >
                  Profile
                </LinkAdmin>
                <LinkAdmin
                  href="logout"
                  className="text-white hover:text-gray-200 transition"
                >
                  Logout
                </LinkAdmin>
              </div>
            </div>
          </nav>
          <div className="flex flex-1">
            <aside className="bg-gray-800 text-white w-64 p-4 flex flex-col space-y-4 shadow-lg">
              <div className="text-center mb-4">
                <h2 className="text-2xl font-semibold">Next JS</h2>
              </div>
              <nav>
                <ul>
                  <li className="mb-2">
                    <LinkAdmin
                      href="/"
                      className="block p-2 hover:bg-gray-700 hover:text-gray-300 transition rounded"
                    >
                      Dashboard
                    </LinkAdmin>
                  </li>
                  <li className="mb-2">
                    <LinkAdmin
                      href="user"
                      className="block p-2 hover:bg-gray-700 hover:text-gray-300 transition rounded"
                    >
                      User
                    </LinkAdmin>
                  </li>
                  <li className="mb-2">
                    <LinkAdmin
                      href="product"
                      className="block p-2 hover:bg-gray-700 hover:text-gray-300 transition rounded"
                    >
                      Product
                    </LinkAdmin>
                  </li>
                </ul>
              </nav>
            </aside>
            {children}
          </div>
          <footer className="bg-gray-800 text-white p-4">
            <div className="container mx-auto text-center">
              &copy; 2024 Your Company
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
