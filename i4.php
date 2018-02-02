<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE');
header('Access-Control-Allow-Headers: X-Requested-With');
header('Content-Type: application/json');

require_once('./vendor/autoload.php');
use Lcobucci\JWT\Builder;
use Lcobucci\JWT\Signer\Hmac\Sha256;
use Lcobucci\JWT\Parser;
use Lcobucci\JWT\ValidationData;

$signer = new Sha256();

$token = (new Builder())->setIssuer('http://example.com') // Configures the issuer (iss claim)
                        ->setAudience('http://example.org') // Configures the audience (aud claim)
                        ->setId('4f1g23a12aa', true) // Configures the id (jti claim), replicating as a header item
                        ->setIssuedAt(time()) // Configures the time that the token was issue (iat claim)
                        ->setExpiration(time() + 3600) // Configures the expiration time of the token (exp claim)
                        ->set('username','mike')
                        ->set('role','admin')
                        ->sign($signer, 'testingiuoio897986uyi') // creates a signature using "testing" as key
                        ->getToken(); // Retrieves the generated token



$decode = file_get_contents('php://input');
$arr = json_decode($decode, true);
if ($arr['email'] == 'me@example.com' && $arr['password'] == '123') {
  echo json_encode([
    "token" => (string)$token
  ]);
}