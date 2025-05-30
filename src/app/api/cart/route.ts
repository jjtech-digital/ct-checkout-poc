import { NextResponse } from "next/server";
import { ApiError } from "next/dist/server/api-utils";

import { getOrCreateCart } from "@/lib/utils/getOrCreateCart";
import { withExceptionFilter } from "@/lib/utils/withExceptionFilter";
import { getAllCookie } from "@/lib/utils/getAllCookie";
import { parseJSON } from "@/lib/utils/helpers";
import { User } from "@/types/types.be";

async function handler(): Promise<NextResponse> {
  const cookies = await getAllCookie();
  const user = parseJSON(cookies.user, {}) as User;

  const cart = await getOrCreateCart({
    anonymousId: user?.anonymousId,
    customerId: user?.customerId,
  });

  if (!cart) {
    throw new ApiError(400, "Cart not found.");
  }

  const cartSummary = {
    id: cart.id,
    totalPrice: cart.totalPrice,
    lineItems: cart.lineItems.map((item) => ({
      id: item.id,
      name: item.name,
      quantity: item.quantity,
      price: item.price,
      totalPrice: item.totalPrice,
      image: item.variant?.images?.[0]?.url,
    })),
    currency: cart.totalPrice.currencyCode,
    anonymousId: user.anonymousId,
  };

  return NextResponse.json({
    cart: cartSummary,
  });
}

export const GET = withExceptionFilter(handler);
