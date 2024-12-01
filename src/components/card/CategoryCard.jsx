import Image from "next/image";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const CategoryCard = async ({ category }) => {
  return (
    <Link href={`/products?category=${category.slug}`}>
      <Card className="relative h-full w-full overflow-hidden rounded-lg bg-transparent transition-colors group hover:bg-emerald-600">
        <CardHeader>
          <Image
            src={`/svg/${category.slug}.svg`}
            alt="test"
            width={32}
            height={32}
          />
        </CardHeader>
        <CardContent className="space-y-1.5">
          <CardTitle className="capitalize text-emerald-600 group-hover:text-white">
            {category.name}
          </CardTitle>
          <CardDescription className="group-hover:text-white">
            10 Products
          </CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CategoryCard;
