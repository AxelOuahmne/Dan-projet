<?php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\RestRequest;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;

class ForgotPasswordController extends Controller
{
    public function forget(Request $request) {
        $email = $request->email;
       
        if(User::where('email', $email)->doesntExist()){
            return response([
                'message' => "L'adresse e-mail {$email} n'existe pas"
            ], 401);
        }
       
        $token = Str::random(100);
       
        try {
            // Check if the email already exists in the password_reset_tokens table
            $existingToken = DB::table('password_reset_tokens')->where('email', $email)->first();
           
            if ($existingToken) {
                // Update the existing token
                DB::table('password_reset_tokens')->where('email', $email)->update([
                    'token' => $token,
                    'created_at' => now()->addHours(6)
                ]);
            } else {
                // Insert a new token
                DB::table('password_reset_tokens')->insert([
                    'email' => $email,
                    'token' => $token,
                    'created_at' => now()->addHours(6)
                ]);
            }
           
            Mail::send('mail.password_reset', ['token' => $token], function ($message) use ($email) {
                $message->to($email);
                $message->subject('RÃ©initialiser votre mot de passe');
            });
           
            return response(['message' => 'VÃ©rifiez votre e-mail.'], 200);
        } catch(Exception $exception) {
            return response([
                'message' => $exception->getMessage()
            ], 400);
        }
    }

    public function reset(RestRequest $request){
        $email= $request->email;
        $token= $request->token;
        $password= Hash::make($request->password);
        $emailChek = DB::table('password_reset_tokens')->where('email',$email)->first();
        $toeknChek = DB::table('password_reset_tokens')->where('token',$token)->first();
        if(!$emailChek) {
            return response([
                'message' => "L'adresse e-mail {$email} n'existe pas",
            ],401);  
        }
        if (!$toeknChek) {
            return response([
                'message' => "Token Not Found."
            ],401);          
         }

         if(!$toeknChek->created_at >= now()){
            return response(['message' => 'Token has expired.'], 200);
        }
        DB::table('users')->where('email',$email)->update(['password' => $password]);
        DB::table('password_reset_tokens')->where('email',$email)->delete();

        return response([
           'message' => 'Password Change Successfully'
        ],200);


    }
}