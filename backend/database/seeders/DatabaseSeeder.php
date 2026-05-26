<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Category;
use App\Models\DudikaPartner;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory()->create([
            'name' => 'Administrator',
            'email' => 'admin@admin.com',
            'password' => 'password',
            'role' => 'admin',
        ]);

        foreach (['Web Application', 'Mobile App', 'Desktop App', 'IoT'] as $name) {
            Category::firstOrCreate(
                ['slug' => Str::slug($name)],
                ['name' => $name]
            );
        }

        $partners = [
            [
                'company_name' => 'Tokopedia',
                'description' => 'Platform e-commerce terbesar di Indonesia — mitra magang dan rekrutmen talenta RPL.',
                'internship_quota' => 12,
                'website_url' => 'https://www.tokopedia.com',
            ],
            [
                'company_name' => 'Gojek',
                'description' => 'Super app mobility & on-demand — kolaborasi proyek dan magang siswa.',
                'internship_quota' => 10,
                'website_url' => 'https://www.gojek.com',
            ],
            [
                'company_name' => 'Bukalapak',
                'description' => 'Marketplace dan solusi digital untuk UMKM — mentoring tech stack modern.',
                'internship_quota' => 8,
                'website_url' => 'https://www.bukalapak.com',
            ],
            [
                'company_name' => 'Telkom Indonesia',
                'description' => 'Telekomunikasi dan infrastruktur digital — program DUDIKA jaringan luas.',
                'internship_quota' => 15,
                'website_url' => 'https://www.telkom.co.id',
            ],
        ];

        foreach ($partners as $partner) {
            DudikaPartner::firstOrCreate(
                ['company_name' => $partner['company_name']],
                $partner
            );
        }
    }
}
