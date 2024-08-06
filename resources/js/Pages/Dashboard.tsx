import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import __ from "@/lang";

export default function Dashboard({ auth, languages, translations }: PageProps) {
    console.log(translations)
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="text-xl font-semibold leading-tight text-gray-800">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            {__('dashboard.greeting', { name: 'John Doe' })}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
