<?php
/*   __________________________________________________
    |  Obfuscated by YAK Pro - Php Obfuscator  2.0.14  |
    |              on 2024-01-07 11:08:56              |
    |    GitHub: https://github.com/pk-fr/yakpro-po    |
    |__________________________________________________|
*/
 namespace App\Repository; use App\Models\Recharge; use Illuminate\Contracts\Pagination\LengthAwarePaginator; use Illuminate\Http\Request; use Illuminate\Support\Facades\Validator; class RechargeRepository extends Repository { public function getList(Request $QiZOc) : LengthAwarePaginator { return Recharge::where("\x72\x65\x63\150\141\x72\147\145\163\x2e\144\145\x6c\x65\x74\145\144", "\75", 0)->when($QiZOc->get("\165\x73\145\162\x5f\151\x64"), function ($SkUGn) use($QiZOc) { return $SkUGn->where("\162\x65\143\150\x61\x72\147\x65\163\x2e\x75\x73\145\x72\x5f\151\144", "\75", $QiZOc->get("\x75\x73\145\162\137\151\144")); })->when($QiZOc->get("\x73\x74\x61\164\x75\x73") !== null, function ($SkUGn) use($QiZOc) { return $SkUGn->whereIn("\162\145\x63\x68\141\x72\147\x65\x73\x2e\163\x74\x61\164\x75\163", $QiZOc->get("\163\164\141\164\165\x73") === "\141\154\x6c" ? [0, 1, 2] : [$QiZOc->get("\x73\164\141\164\x75\163") * 1]); })->when($QiZOc->get("\156\x69\143\153\156\141\x6d\x65") !== null, function ($SkUGn) use($QiZOc) { return $SkUGn->where("\165\163\x65\162\163\x2e\x6e\x69\x63\153\x6e\141\x6d\145", "\x6c\x69\x6b\145", $QiZOc->get("\156\x69\x63\x6b\x6e\x61\155\145") . "\x25"); })->leftJoin("\x75\163\x65\x72\163", "\x75\163\x65\x72\163\56\151\144", "\75", "\x72\145\143\x68\x61\162\x67\145\163\56\x75\163\145\162\137\x69\x64")->selectRaw("\162\x65\x63\150\x61\162\147\x65\x73\56\52\54\x20\165\x73\x65\162\x73\56\156\x69\x63\x6b\156\x61\155\x65")->paginate($this->FfaKn, ["\52"]); } public function add(Request $QiZOc) : array { goto Ds2e0; Ds2e0: $UGmxt = Validator::make($QiZOc->all(), ["\x6e\x61\x6d\x65" => "\x72\145\x71\x75\151\x72\x65\x64\x7c\155\x61\170\72\x33\62"], ["\x6e\141\155\x65\56\162\145\x71\x75\151\162\145\144" => "\xe5\220\x8d\347\247\xb0\345\277\x85\xe9\xa1\273", "\156\x61\155\145\56\x6d\x61\x78" => "\xe5\x90\215\347\247\xb0\xe6\x9c\x80\345\xa4\xa7\xe9\225\277\345\xba\xa6\344\xb8\215\xe8\xb6\x85\350\277\x87\63\62\xe5\xad\x97\347\254\xa6"]); goto UJqBP; chMTK: KAMOc: goto jlh_D; UJqBP: if (!$UGmxt->fails()) { goto KAMOc; } goto GpNrq; jlh_D: try { goto wiMxf; wiMxf: if (!Recharge::where("\x6e\141\155\x65", $QiZOc->post("\156\141\x6d\x65"))->where("\144\x65\x6c\145\164\145\x64", 0)->count()) { goto q_uxa; } goto QDLPB; Si26E: return ["\x63\157\x64\145" => 0, "\144\141\164\x61" => [], "\155\163\147" => "\346\210\220\xe5\212\x9f"]; goto MSO3d; fxMgV: q_uxa: goto Ir0DB; QDLPB: throw new \Exception("\xe5\x90\x8d\347\xa7\260\xe5\267\262\347\273\x8f\345\xad\x98\xe5\234\250"); goto fxMgV; Ir0DB: Recharge::insert(["\x6e\141\x6d\x65" => $QiZOc->post("\156\x61\155\x65"), "\143\162\x65\x61\164\145\x64\137\141\x74" => time()]); goto Si26E; MSO3d: } catch (\Exception $FBi7X) { return ["\143\x6f\144\145" => 1, "\x6d\x73\147" => $FBi7X->getMessage()]; } goto Yic29; GpNrq: return ["\143\157\144\x65" => 1, "\155\163\x67" => $UGmxt->errors()->first()]; goto chMTK; Yic29: } public function update(Request $QiZOc) : array { goto nhpIB; SIM64: return ["\x63\x6f\x64\145" => 1, "\x6d\163\147" => $UGmxt->errors()->first()]; goto xZtxv; hipD9: if (!$UGmxt->fails()) { goto ruBb2; } goto SIM64; nhpIB: $UGmxt = Validator::make($QiZOc->all(), ["\151\x64" => "\162\x65\x71\x75\151\x72\x65\144", "\163\x74\x61\x74\x75\x73" => "\x72\145\x71\x75\x69\162\145\x64"], ["\151\144\x2e\162\x65\161\x75\x69\162\145\144" => "\111\x44\xe5\277\205\351\241\273", "\x73\164\x61\164\165\x73\x2e\162\x65\161\x75\151\162\x65\x64" => "\xe7\212\266\xe6\x80\x81\xe5\277\205\xe9\xa1\xbb"]); goto hipD9; tGlQB: try { Recharge::updateOrCreate(["\151\144" => $QiZOc->post("\x69\x64")], ["\x73\164\141\x74\165\163" => $QiZOc->post("\163\x74\141\164\165\x73")]); return ["\x63\157\x64\x65" => 0, "\x64\141\164\141" => [], "\x6d\163\147" => "\xe6\210\x90\xe5\x8a\237"]; } catch (\Exception $FBi7X) { return ["\143\157\x64\145" => 1, "\155\x73\147" => $FBi7X->getMessage()]; } goto mQjB2; xZtxv: ruBb2: goto tGlQB; mQjB2: } public function remove(Request $QiZOc) : array { goto sQ5rY; axuwV: if (!$UGmxt->fails()) { goto WBdlU; } goto zezjm; J9wUF: WBdlU: goto BzFl2; BzFl2: try { Recharge::updateOrCreate(["\151\144" => $QiZOc->post("\x69\x64")], ["\x64\x65\154\145\x74\x65\144" => 1]); return ["\x63\x6f\144\145" => 0, "\144\141\164\x61" => [], "\155\163\x67" => "\346\210\220\xe5\x8a\237"]; } catch (\Exception $FBi7X) { return ["\x63\x6f\144\x65" => 1, "\155\163\147" => $FBi7X->getMessage()]; } goto aOfAD; sQ5rY: $UGmxt = Validator::make($QiZOc->all(), ["\x69\144" => "\x72\x65\x71\x75\x69\x72\x65\x64"], ["\151\144\56\x72\x65\161\x75\151\162\145\144" => "\111\104\xe5\xbf\205\351\241\273"]); goto axuwV; zezjm: return ["\x63\157\x64\x65" => 1, "\x6d\163\147" => $UGmxt->errors()->first()]; goto J9wUF; aOfAD: } }