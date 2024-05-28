import Container from "@/components/Container";
export const metadata = {
  title: "Admin",
};
export default function AdminPage() {
  return (
    <Container>
      <div className="container mx-auto">
        <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-4 rounded shadow flex items-center">
            <div className="p-3 bg-blue-500 text-white rounded-full">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 12l2-2m0 0l7-7 7 7m-9 4v6a2 2 0 002 2h4a2 2 0 002-2v-6m-7-4l2 2m-2-2h4"
                ></path>
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-lg font-semibold">1500</p>
              <p className="text-gray-600">New Orders</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded shadow flex items-center">
            <div className="p-3 bg-green-500 text-white rounded-full">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3v18h18M3 3l18 18"
                ></path>
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-lg font-semibold">245</p>
              <p className="text-gray-600">Products</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded shadow flex items-center">
            <div className="p-3 bg-yellow-500 text-white rounded-full">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 16h-1v-4h-1m0 0V9m1 3h1m0 0V9h-1m6-2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-lg font-semibold">24</p>
              <p className="text-gray-600">Issues</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded shadow flex items-center">
            <div className="p-3 bg-red-500 text-white rounded-full">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4l3 3"
                ></path>
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-lg font-semibold">3 hrs</p>
              <p className="text-gray-600">Average Time</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded shadow mb-8">
          <canvas id="myChart"></canvas>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Order ID</th>
                <th className="py-2 px-4 border-b">Customer</th>
                <th className="py-2 px-4 border-b">Date</th>
                <th className="py-2 px-4 border-b">Amount</th>
                <th className="py-2 px-4 border-b">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b">#001</td>
                <td className="py-2 px-4 border-b">John Doe</td>
                <td className="py-2 px-4 border-b">2024-05-01</td>
                <td className="py-2 px-4 border-b">$100.00</td>
                <td className="py-2 px-4 border-b text-green-500">Completed</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">#002</td>
                <td className="py-2 px-4 border-b">Jane Smith</td>
                <td className="py-2 px-4 border-b">2024-05-02</td>
                <td className="py-2 px-4 border-b">$250.00</td>
                <td className="py-2 px-4 border-b text-yellow-500">Pending</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Container>
  );
}
