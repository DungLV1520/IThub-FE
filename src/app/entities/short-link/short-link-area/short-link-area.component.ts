import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ULinkService } from "../../services/ulink.service";
import { catchError, switchMap, throwError } from "rxjs";
import { RegisterDomain } from "../../model/ulink.model";
import { HotToastService } from "@ngneat/hot-toast";
import { MatDialog } from "@angular/material/dialog";
import { Clipboard } from "@angular/cdk/clipboard";

@Component({
  selector: "app-short-link-area",
  templateUrl: "./short-link-area.component.html",
  styleUrls: ["./short-link-area.component.scss"],
})
export class ShortLinkAreaComponent implements OnInit {
  @ViewChild("modal") modal: any;
  selectedFiles?: FileList;
  selectedFileNames: string[] = [];
  progressInfos: any[] = [];
  message: string[] = [];
  previews: string[] = [];
  shortLinkForm!: any;
  urlULink?: any = "";
  urlULinkPreview?: any = "result...";
  urlImageULink?: string;
  isRegisterSuccess: boolean = false;
  fileToUpload: File | null = null;
  typeDisplay = "video.other";
  registerDomain: RegisterDomain = new RegisterDomain();

  constructor(
    private formBuilder: FormBuilder,
    private uLinkService: ULinkService,
    private toast: HotToastService,
    private dialog: MatDialog,
    private clipboard: Clipboard
  ) {}

  ngOnInit(): void {
    this.shortLinkForm = this.formBuilder.group({
      file: ["", [Validators.required]],
      originalLink: [
        "",
        [
          Validators.required,
          Validators.maxLength(1000),
          Validators.pattern(
            "^(http://www.|https://www.|http://|https://)?[a-z0-9]+([-.]{1}[a-z0-9]+)*.[a-z]{2,5}(:[0-9]{1,5})?(/.*)?$"
          ),
        ],
      ],
      description: ["", [Validators.required, Validators.maxLength(50)]],
      title: ["", [Validators.required, Validators.maxLength(50)]],
      aliasRegister: ["", [Validators.minLength(2), Validators.maxLength(50)]],
      displayType: ["video.other"],
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.openDialog(this.modal);
    }, 500);
  }

  openDialog(content: any): void {
    const dialof = this.dialog.open(content, {
      width: "1250px",
      disableClose: false,
    });

    // dialof.afterClosed().subscribe(() => {
    // this.router.navigateByUrl("/short-link");
    // });
  }

  get f() {
    return this.shortLinkForm.controls;
  }

  registerLink(): void {
    if (!this.shortLinkForm.valid) {
      this.toast.error(
        "You have not filled in all the required fields in the form",
        {
          dismissible: true,
          duration: 3000,
          position: "top-center",
        }
      );
      return;
    }

    const toastRef = this.toast.loading("Creating Short URL...", {
      dismissible: true,
      duration: 5000,
      position: "top-center",
    });

    const formData = new FormData();
    formData.append("file", this.selectedFiles![0]);

    this.uLinkService
      .uploadImage(formData)
      .pipe(
        catchError((error) => {
          toastRef.close();
          this.toast.error(error.message, {
            duration: 3000,
            position: "top-center",
          });

          return throwError(() => new Error(error.message));
        }),
        switchMap((res: any) => {
          this.urlImageULink = res.data;
          let register = new RegisterDomain();
          register.type = "FACEBOOK";
          register.source_page = "https://ulink.asia";
          register.url_original = this.shortLinkForm.get("originalLink").value;
          register.setting_advanced = false;
          register.content.alias_register =
            this.shortLinkForm.get("aliasRegister").value;
          register.content.url_normal_user =
            this.shortLinkForm.get("originalLink").value;
          register.content.url_manager_fb_user = "https://www.youtube.com";
          register.content.title = this.shortLinkForm.get("title").value;
          register.content.type = this.typeDisplay;
          register.content.description =
            this.shortLinkForm.get("description").value;
          register.content.thumbnail = this.urlImageULink;

          return this.uLinkService.registerDomain(register);
        })
      )
      .subscribe({
        next: (res: any) => {
          toastRef.close();
          this.shortLinkForm.reset();

          if (res.code === 400) {
            this.toast.error(res?.message, {
              duration: 3000,
              position: "top-center",
            });
            return;
          }

          this.urlULink = res?.data?.url_ulink;
          this.toast.success(this.urlULink + " is coppied", {
            duration: 3000,
            position: "top-center",
          });

          this.copyToClipboard();
        },
        error: (error) => {
          toastRef.close();
          this.toast.error(error.error.message, {
            duration: 3000,
            position: "top-center",
          });
        },
      });
  }

  selectFiles(event: any): void {
    this.message = [];
    this.progressInfos = [];
    this.selectedFileNames = [];
    this.selectedFiles = event.target.files;

    this.previews = [];
    if (this.selectedFiles && this.selectedFiles[0]) {
      const numberOfFiles = this.selectedFiles.length;
      for (let i = 0; i < numberOfFiles; i++) {
        const reader = new FileReader();

        reader.onload = (e: any) => {
          this.previews.push(e.target.result);
        };

        reader.readAsDataURL(this.selectedFiles[i]);

        this.selectedFileNames.push(this.selectedFiles[i].name);
      }
    }
  }

  copyToClipboard() {
    this.clipboard.copy(this.urlULink);
    this.toast.success("Copy is successfull", {
      duration: 3000,
      position: "top-center",
    });
  }
}
