<?php

namespace App\Filament\Resources\HallOfFameResource\Pages;

use App\Filament\Resources\HallOfFameResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditHallOfFame extends EditRecord
{
    protected static string $resource = HallOfFameResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}

