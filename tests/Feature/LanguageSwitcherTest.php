<?php

test('sets the language correctly', function () {
    $response = $this->post('/language', ['language' => 'de']);

    $response->assertSessionHas('language', 'de');

    $response->assertStatus(302);
});

test('sets the language if the chosen language is not valid', function () {
    $response = $this->post('/language', ['language' => 'fr']);

    $response->assertSessionHas('language', app()->getLocale());

    $response->assertStatus(302);
});
