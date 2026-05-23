<?php

namespace App\Filament\Resources\DudikaPartnerResource\Pages;

use App\Filament\Resources\DudikaPartnerResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListDudikaPartners extends ListRecords
{
    protected static string $resource = DudikaPartnerResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
