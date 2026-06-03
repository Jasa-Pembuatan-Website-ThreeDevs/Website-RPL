<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('hall_of_fames', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('class_year')->nullable();
            $table->string('role')->nullable();
            $table->string('company')->nullable();
            $table->string('location')->nullable();
            $table->text('description')->nullable();
            $table->string('color')->nullable();
            $table->string('image_path')->nullable();
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('hall_of_fames');
    }
};

