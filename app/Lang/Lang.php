<?php

namespace App\Lang;

enum Lang: String
{
    case EN = 'en';
    case DE = 'de';

    public function label()
    {
        return match ($this) {
            self::EN => 'English',
            self::DE => 'Deutsch',
        };
    }
}
