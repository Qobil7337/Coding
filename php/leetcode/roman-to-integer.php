<?php

function romanToInt($s)
{
    $map = [
      'I' => 1,
      'V' => 5,
      'X' => 10,
      'L' => 50,
      'C' => 100,
      'D' => 500,
      'M' => 1000,
    ];
    $result = 0;
    for ($i = 0; $i < strlen($s); $i++) {
        $currentValue = $map[$s[$i]];
        $nextValue = $map[$s[$i + 1]];
        if (!isset($nextValue)) {
            $result += $currentValue;
            continue;
        }
        if ($currentValue < $nextValue) {
            $var = $nextValue - $currentValue;
            $result += $var;
            $i++;
        } else {
            $result += $currentValue;
        }
    }
    return $result;
}

$result = romanToInt('MCMXCIV');