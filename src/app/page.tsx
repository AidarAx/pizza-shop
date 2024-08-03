import {
  Container,
  Filters,
  ProductsGroupList,
  Title,
  TopBar,
} from "@/components/shared";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>

      <TopBar />

      <Container className="mt-10 pb-64">
        <div className="flex gap-[60px]">
          <div className="w-[250px]">
            <Filters />
          </div>

          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title="Пицца"
                items={[
                  {
                    id: 7,
                    name: "Диабло",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EE7D6149EB101D8727573088FA2EFF.avif",
                    price: 400,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 8,
                    name: "Диабло",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EE7D6149EB101D8727573088FA2EFF.avif",
                    price: 400,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 9,
                    name: "Диабло",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EE7D6149EB101D8727573088FA2EFF.avif",
                    price: 400,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 10,
                    name: "Диабло",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EE7D6149EB101D8727573088FA2EFF.avif",
                    price: 400,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 11,
                    name: "Диабло",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EE7D6149EB101D8727573088FA2EFF.avif",
                    price: 400,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 12,
                    name: "Диабло",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EE7D6149EB101D8727573088FA2EFF.avif",
                    price: 400,
                    items: [{ price: 550 }],
                  },
                ]}
                categoryId={1}
              />
              <ProductsGroupList
                title="Комбо"
                items={[
                  {
                    id: 1,
                    name: "Диабло",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EE7D6149EB101D8727573088FA2EFF.avif",
                    price: 400,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 2,
                    name: "Диабло",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EE7D6149EB101D8727573088FA2EFF.avif",
                    price: 400,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 3,
                    name: "Диабло",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EE7D6149EB101D8727573088FA2EFF.avif",
                    price: 400,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 4,
                    name: "Диабло",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EE7D6149EB101D8727573088FA2EFF.avif",
                    price: 400,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 5,
                    name: "Диабло",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EE7D6149EB101D8727573088FA2EFF.avif",
                    price: 400,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 6,
                    name: "Диабло",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EE7D6149EB101D8727573088FA2EFF.avif",
                    price: 400,
                    items: [{ price: 550 }],
                  },
                ]}
                categoryId={2}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
