import Container from "@/components/Container";
export const metadata = {
  title: "Product",
};
import prisma from "@/lib/prisma";
export default async function AdminProduct() {
  const products = await prisma.product.findMany();
  return (
    <Container>
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Id</th>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Code</th>
              <th className="py-2 px-4 border-b">Regular Price</th>
              <th className="py-2 px-4 border-b">Sale Price</th>
              <th className="py-2 px-4 border-b">Status</th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product) => {
              return (
                <tr>
                  <td className="py-2 px-4 border-b">{product.id}</td>
                  <td className="py-2 px-4 border-b">{product.name}</td>
                  <td className="py-2 px-4 border-b">{product.code}</td>
                  <td className="py-2 px-4 border-b">
                    {product.regular_price.toString()}
                  </td>
                  <td className="py-2 px-4 border-b">
                    {product.sale_price.toString()}
                  </td>
                  <td className="py-2 px-4 border-b text-green-500">
                    {product.display ? "Show" : "Hide"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Container>
  );
}
