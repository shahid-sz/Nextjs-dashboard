import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import {
  CardsSkeleton,
  LatestInvoicesSkeleton,
  RevenueChartSkeleton,
} from '@/app/ui/skeletons';
import { lusitana } from '@/public/fonts/fonts';
import { Suspense } from 'react';
import CardWrapper from '../../ui/dashboard/cards';
import LatestInvoices from '../../ui/dashboard/latest-invoices';

async function Dashboard() {
  return (
    <main>
      <h1
        className={`${lusitana.className} md:text-1xl text-color:red mb-4 text-2xl`}
      >
       Admin Dashboard 
      </h1>
      <div className="sm-grid-cols-2 grid gap-6 lg:grid-cols-4">
        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>

        {/* <Card title="Collected" value={totalPaidInvoices} type="collected" />
        <Card title="Pending" value={totalPendingInvoices} type="pending" />
        <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
        <Card
          title="Total Customers"
          value={numberOfCustomers}
          type="customers"
        /> */}
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-1 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>

        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestInvoices />
        </Suspense>
      </div>
    </main>
  );
}

export default Dashboard;
