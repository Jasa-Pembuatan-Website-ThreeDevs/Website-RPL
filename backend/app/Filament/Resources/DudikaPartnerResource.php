<?php

namespace App\Filament\Resources;

use Filament\Actions;

use App\Filament\Resources\DudikaPartnerResource\Pages;
use App\Models\DudikaPartner;
use Filament\Forms;
use Filament\Resources\Resource;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;
use Filament\Tables;
use Filament\Tables\Table;

class DudikaPartnerResource extends Resource
{
    protected static ?string $model = DudikaPartner::class;

    protected static string|\BackedEnum|null $navigationIcon = 'heroicon-o-briefcase';

    protected static ?string $navigationLabel = 'Mitra Industri (DUDIKA)';

    protected static string|null|\UnitEnum $navigationGroup = 'School Management';

    public static function form(Schema $schema): Schema
    {
        return $schema
            ->schema([
                Section::make()
                    ->schema([
                        Forms\Components\TextInput::make('company_name')
                            ->required()
                            ->maxLength(255),

                        Forms\Components\FileUpload::make('logo_image')
                            ->image()
                            ->directory('partners')
                            ->label('Company Logo'),

                        Forms\Components\Textarea::make('description')
                            ->columnSpanFull(),

                        Forms\Components\TextInput::make('internship_quota')
                            ->numeric()
                            ->minValue(0),

                        Forms\Components\TextInput::make('website_url')
                            ->url()
                            ->maxLength(255),
                    ])
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\ImageColumn::make('logo_image')
                    ->label('Logo'),

                Tables\Columns\TextColumn::make('company_name')
                    ->searchable()
                    ->sortable(),

                Tables\Columns\TextColumn::make('internship_quota')
                    ->label('Quota')
                    ->sortable(),

                Tables\Columns\TextColumn::make('website_url')
                    ->label('Website')
                    ->toggleable(isToggledHiddenByDefault: true),

                Tables\Columns\TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                //
            ])
            ->actions([
                Actions\EditAction::make(),
                Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Actions\BulkActionGroup::make([
                    Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListDudikaPartners::route('/'),
            'create' => Pages\CreateDudikaPartner::route('/create'),
            'edit' => Pages\EditDudikaPartner::route('/{record}/edit'),
        ];
    }
}
