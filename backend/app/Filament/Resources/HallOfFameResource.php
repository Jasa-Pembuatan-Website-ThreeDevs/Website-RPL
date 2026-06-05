<?php

namespace App\Filament\Resources;

use App\Filament\Resources\HallOfFameResource\Pages;
use App\Models\HallOfFame;
use Filament\Actions;
use Filament\Forms;
use Filament\Resources\Resource;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;
use Filament\Tables;
use Filament\Tables\Table;

class HallOfFameResource extends Resource
{
    protected static ?string $model = HallOfFame::class;

    protected static string|\BackedEnum|null $navigationIcon = 'heroicon-o-star';

    protected static string|\UnitEnum|null $navigationGroup = 'Content Management';

    protected static ?string $navigationLabel = 'Hall of Fame (Alumni)';

    public static function form(Schema $schema): Schema
    {
        return $schema
            ->schema([
                Section::make()
                    ->schema([
                        Forms\Components\TextInput::make('name')
                            ->required()
                            ->maxLength(255),

                        Forms\Components\TextInput::make('class_year')
                            ->label('Class Year')
                            ->maxLength(50),

                        Forms\Components\TextInput::make('role')
                            ->maxLength(255),

                        Forms\Components\TextInput::make('company')
                            ->maxLength(255),

                        Forms\Components\TextInput::make('location')
                            ->maxLength(255),

                        Forms\Components\Textarea::make('description')
                            ->columnSpanFull(),

                        Forms\Components\Select::make('color')
                            ->options([
                                'emerald' => 'emerald',
                                'cyan' => 'cyan',
                                'yellow' => 'yellow',
                                'pink' => 'pink',
                                'blue' => 'blue',
                                'red' => 'red',
                            ])
                            ->searchable()
                            ->default('emerald'),

                        Forms\Components\FileUpload::make('image_path')
                            ->image()
                            ->directory('hall_of_fame')
                            ->label('Photo'),

                        Forms\Components\Toggle::make('is_active')
                            ->label('Show on landing page')
                            ->default(true),
                    ])
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\ImageColumn::make('image_path')
                    ->label('Photo')
                    ->circular(),

                Tables\Columns\TextColumn::make('name')
                    ->searchable()
                    ->sortable(),

                Tables\Columns\TextColumn::make('class_year')
                    ->label('Year')
                    ->sortable()
                    ->toggleable(),

                Tables\Columns\TextColumn::make('company')
                    ->searchable()
                    ->sortable()
                    ->toggleable(),

                Tables\Columns\IconColumn::make('is_active')
                    ->boolean()
                    ->label('Active')
                    ->sortable(),

                Tables\Columns\TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
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
            'index' => Pages\ListHallOfFames::route('/'),
            'create' => Pages\CreateHallOfFame::route('/create'),
            'edit' => Pages\EditHallOfFame::route('/{record}/edit'),
        ];
    }
}

