import { MainLayout } from "../layouts/main";

export default function LostPage() {
  return (
    <MainLayout title="Page Not Found">
      <div className="flex flex-col items-center justify-center w-full h-96 bg-cream">
        <h1 className="font-bold text-7xl w-full text-center">404</h1>
        <h2 className="text-4xl font-bold w-full text-center">
          We can&apos;t seem to find what you&apos;re looking for
        </h2>
      </div>
    </MainLayout>
  );
}
