import { json, LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export function loader({ params }: LoaderFunctionArgs) {
  return json({ userId: params.userId });
}

export default function ProfileWishlists() {
  const { userId } = useLoaderData<typeof loader>();

  return <>user {userId}</>;
}
