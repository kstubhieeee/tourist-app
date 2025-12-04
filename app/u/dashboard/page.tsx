import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import { HiOutlineCalendar, HiOutlineHeart, HiOutlineTicket, HiOutlineCurrencyRupee } from "react-icons/hi";
import Link from "next/link";

const stats = [
  { label: "Upcoming Trips", value: "0", icon: HiOutlineCalendar, color: "bg-blue-500" },
  { label: "Completed Trips", value: "0", icon: HiOutlineTicket, color: "bg-green-500" },
  { label: "Wishlist Items", value: "0", icon: HiOutlineHeart, color: "bg-pink-500" },
  { label: "Total Spent", value: "0", icon: HiOutlineCurrencyRupee, color: "bg-amber-500" },
];

const quickActions = [
  { label: "Browse Destinations", href: "/#destinations", description: "Explore popular destinations" },
  { label: "View Packages", href: "/#packages", description: "Check out our curated packages" },
  { label: "Contact Support", href: "/#contact", description: "Get help with your bookings" },
];

export default async function DashboardPage() {
  const session = await getSession();

  if (!session) {
    redirect("/login");
  }

  const firstName = session.name.split(" ")[0];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-[#0F172A]">Welcome back, {firstName}</h1>
        <p className="mt-2 text-gray-600">Here&apos;s an overview of your travel journey</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="flex items-center gap-4">
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${stat.color}`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-[#0F172A]">{stat.value}</p>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="mb-6 text-xl font-bold text-[#0F172A]">Recent Activity</h2>
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
                <HiOutlineCalendar className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">No bookings yet</h3>
              <p className="mb-6 max-w-sm text-gray-500">
                Start exploring our destinations and book your first adventure with us.
              </p>
              <Link
                href="/#packages"
                className="rounded-xl bg-[#0B7A75] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#096662]"
              >
                Explore Packages
              </Link>
            </div>
          </div>
        </div>

        <div>
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="mb-6 text-xl font-bold text-[#0F172A]">Quick Actions</h2>
            <div className="space-y-3">
              {quickActions.map((action) => (
                <Link
                  key={action.label}
                  href={action.href}
                  className="block rounded-xl border border-gray-100 p-4 transition-all hover:border-[#0B7A75]/30 hover:bg-[#0B7A75]/5"
                >
                  <h3 className="font-semibold text-[#0F172A]">{action.label}</h3>
                  <p className="text-sm text-gray-500">{action.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-2xl bg-gradient-to-r from-[#0B7A75] to-[#0B7A75]/80 p-8">
        <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <div>
            <h3 className="text-xl font-bold text-white">Ready for your next adventure?</h3>
            <p className="text-white/80">Discover handpicked destinations across India</p>
          </div>
          <Link
            href="/#destinations"
            className="rounded-xl bg-white px-6 py-3 font-semibold text-[#0B7A75] transition-colors hover:bg-gray-100"
          >
            Browse Destinations
          </Link>
        </div>
      </div>
    </div>
  );
}

