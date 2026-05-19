<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('dudika_partners', function (Blueprint $table) {
            $table->id();
            $table->string('company_name');
            $table->string('logo_image')->nullable();
            $table->text('description')->nullable();
            $table->integer('internship_quota')->default(0);
            $table->string('website_url')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('dudika_partners');
    }
};
