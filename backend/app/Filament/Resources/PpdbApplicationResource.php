<?php

namespace App\Filament\Resources;

use App\Filament\Resources\PpdbApplicationResource\Pages;
use App\Models\PpdbApplication;
use Filament\Actions;
use Filament\Forms;
use Filament\Resources\Resource;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Components\Utilities\Set;
use Filament\Schemas\Schema;
use Filament\Tables;
use Filament\Tables\Table;

class PpdbApplicationResource extends Resource
{
    protected static ?string $model = PpdbApplication::class;

    protected static string|\BackedEnum|null $navigationIcon = 'heroicon-o-clipboard-document-list';

    protected static string|\UnitEnum|null $navigationGroup = 'PPDB';

    public static function form(Schema $schema): Schema
    {
        return $schema->schema([
            Section::make()
                ->schema([
                    Forms\Components\TextInput::make('full_name')->required()->maxLength(255),
                    Forms\Components\TextInput::make('nisn')->maxLength(50),
                    Forms\Components\TextInput::make('school_origin')->maxLength(255),
                    Forms\Components\TextInput::make('whatsapp')->maxLength(50),
                    Forms\Components\Textarea::make('reason')->rows(4),
                    Forms\Components\Select::make('status')->options([
                        'pending' => 'Pending',
                        'accepted' => 'Accepted',
                        'rejected' => 'Rejected',
                    ])->default('pending'),
                ]),
        ]);
    }

    public static function table(Table $table): Table
    {
        return $table->columns([
            Tables\Columns\TextColumn::make('full_name')->searchable()->sortable(),
            Tables\Columns\TextColumn::make('nisn')->sortable(),
            Tables\Columns\TextColumn::make('school_origin')->sortable(),
            Tables\Columns\TextColumn::make('whatsapp'),
            Tables\Columns\BadgeColumn::make('status')->colors([
                'warning' => 'pending',
                'success' => 'accepted',
                'danger' => 'rejected',
            ])->sortable(),
            Tables\Columns\TextColumn::make('created_at')->dateTime()->sortable(),
        ])->filters([])
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
        return [];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListPpdbApplications::route('/'),
            'create' => Pages\CreatePpdbApplication::route('/create'),
            'edit' => Pages\EditPpdbApplication::route('/{record}/edit'),
        ];
    }
}
