<?php

namespace App\Filament\Resources\DudikaPartnerResource\Pages;

use App\Filament\Resources\DudikaPartnerResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditDudikaPartner extends EditRecord
{
    protected static string $resource = DudikaPartnerResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
