<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserReg extends Model
{
    public $timestamps = false;
    use HasFactory;
    protected $table = 'user_regs';
    protected $fillable = ['email', 'name','password','profpic','userroll'];
}
