# Create T3 App

This is an app bootstrapped according to the [init.tips](https://init.tips) stack, also known as the T3-Stack.

## What's next? How do I make an app with this?

We try to keep this project as simple as possible, so you can start with the most basic configuration and then move on to more advanced configuration.

If you are not familiar with the different technologies used in this project, please refer to the respective docs. If you still are in the wind, please join our [Discord](https://t3.gg/discord) and ask for help.

- [Next-Auth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [TailwindCSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)

We also [roll our own docs](https://create.t3.gg) with some summary information and links to the respective documentation.

Also checkout these awesome tutorials on `create-t3-app`.

- [Build a Blog With the T3 Stack - tRPC, TypeScript, Next.js, Prisma & Zod](https://www.youtube.com/watch?v=syEWlxVFUrY)
- [Build a Live Chat Application with the T3 Stack - TypeScript, Tailwind, tRPC](https://www.youtube.com/watch?v=dXRRY37MPuk)
- [Build a full stack app with create-t3-app](https://www.nexxel.dev/blog/ct3a-guestbook)
- [A first look at create-t3-app](https://dev.to/ajcwebdev/a-first-look-at-create-t3-app-1i8f)

## How do I deploy this?

Follow our deployment guides for [Vercel](https://create.t3.gg/en/deployment/vercel) and [Docker](https://create.t3.gg/en/deployment/docker) for more information.

Ubuntu logs while loading

```cmd
[    0.217569]  core perfctr but no constraints: unknown hardware!
[    0.961773]  kobject: can not set name properly!
[    0.961804]  mce: Unable to init MCE device (rc: -22)
[    0.965817]  ima: Error Communicating to TPM chip
[    0.965826]  ima: Error Communicating to TPM chip
[    0.965834]  ima: Error Communicating to TPM chip
[    0.965841]  ima: Error Communicating to TPM chip
[    0.965850]  ima: Error Communicating to TPM chip
[    0.965857]  ima: Error Communicating to TPM chip
[    0.965865]  ima: Error Communicating to TPM chip
[    0.965872]  ima: Error Communicating to TPM chip
[    1.075410]nouveau 0000:06:00.0 unknown chipset (b76000a1)


```


boot repair disk - error log

```cmd

boot-repair-4ppa203                                              [20230112_0019]

============================== Boot Info Summary ===============================

 => Windows 7/8/10/11/2012 is installed in the MBR of /dev/nvme0n1.
 => Syslinux MBR (3.61-4.03) is installed in the MBR of /dev/sda.

nvme0n1p1: _____________________________________________________________________

    File system:       vfat
    Boot sector type:  Windows 8/10/11/2012: FAT32
    Boot sector info:  No errors found in the Boot Parameter Block.
    Operating System:  
    Boot files:        /efi/Boot/bootx64.efi /efi/Microsoft/Boot/bootmgfw.efi 
                       /efi/Microsoft/Boot/bootmgr.efi

nvme0n1p2: _____________________________________________________________________

    File system:       
    Boot sector type:  -
    Boot sector info: 

nvme0n1p3: _____________________________________________________________________

    File system:       ntfs
    Boot sector type:  Windows 8/10/11/2012: NTFS
    Boot sector info:  No errors found in the Boot Parameter Block.
    Operating System:  Windows 8 or 10
    Boot files:        /Windows/System32/winload.exe

nvme0n1p4: _____________________________________________________________________

    File system:       ntfs
    Boot sector type:  Windows 8/10/11/2012: NTFS
    Boot sector info:  No errors found in the Boot Parameter Block.
    Operating System:  
    Boot files:        

sda1: __________________________________________________________________________

    File system:       vfat
    Boot sector type:  Unknown
    Boot sector info:  According to the info in the boot sector, sda1 starts 
                       at sector 0. But according to the info from fdisk, 
                       sda1 starts at sector 40.
    Operating System:  
    Boot files:        

sda2: __________________________________________________________________________

    File system:       vfat
    Boot sector type:  SYSLINUX 4.03 0x4d8ae235
    Boot sector info:  Syslinux looks at sector 1991496 of /dev/sda2 for its 
                       second stage. SYSLINUX is installed in the / 
                       directory. No errors found in the Boot Parameter Block.
    Operating System:  
    Boot files:        /boot/grub/grub.cfg /syslinux.cfg 
                       /efi/BOOT/grubx64.efi /ldlinux.sys


================================ 1 OS detected =================================

OS#1:   Windows 8 or 10 on nvme0n1p3

================================ Host/Hardware =================================

CPU architecture: 64-bit
Video: NVIDIA Corporation from NVIDIA Corporation
Live-session OS is Ubuntu 64-bit (Boot-Repair-Disk 64bit 20200604, bionic, x86_64)

===================================== UEFI =====================================

BIOS/UEFI firmware: P1.80 from American Megatrends International, LLC.
The firmware is EFI-compatible, and is set in EFI-mode for this live-session.
SecureBoot disabled (confirmed by mokutil).
BootCurrent: 0006
Timeout: 1 seconds
BootOrder: 0000,0005,0006,0002,0004
Boot0000* Windows Boot Manager	HD(1,GPT,6d982ca9-5870-412b-88a6-8e58945248ea,0x800,0x32000)/File(\EFI\MICROSOFT\BOOT\BOOTMGFW.EFI)WINDOWS.........x...B.C.D.O.B.J.E.C.T.=.{.9.d.e.a.8.6.2.c.-.5.c.d.d.-.4.e.7.0.-.a.c.c.1.-.f.3.2.b.3.4.4.d.4.7.9.5.}....................
Boot0002* Hard Drive	BBS(HD,,0x0)..GO..NO........q.S.a.m.s.u.n.g. .S.S.D. .9.7.0. .E.V.O. .P.l.u.s. .1.T.B....................A...........................%8[.P.......4..Gd-.;.A..MQ..L.S.6.S.1.N.C.0.R.B.0.1.5.3.3.D........BO
Boot0004* USB	BBS(USB,,0x0)..GO..NO........q.S.a.n.D.i.s.k....................A.............................>..Gd-.;.A..MQ..L.4.C.5.3.0.0.0.1.0.1.1.2.2.1.1.2.1.2.8.2........BO
Boot0005* UEFI: SanDisk, Partition 1	PciRoot(0x0)/Pci(0x8,0x1)/Pci(0x0,0x3)/USB(0,0)/HD(1,GPT,6416eb57-93cc-49c4-b984-15c122ebb687,0x28,0x64000)..BO
Boot0006* UEFI: SanDisk, Partition 2	PciRoot(0x0)/Pci(0x8,0x1)/Pci(0x0,0x3)/USB(0,0)/HD(2,GPT,27022a3b-4b22-4b9f-a310-76210e010a7d,0x64800,0x1cd1000)..BO

d1f6c29ed98f2a8102fd87c118371e0b   nvme0n1p1/Boot/bootx64.efi
d1f6c29ed98f2a8102fd87c118371e0b   nvme0n1p1/Microsoft/Boot/bootmgfw.efi
85b10a5efd8419adc616cb2a5a70db30   nvme0n1p1/Microsoft/Boot/bootmgr.efi

============================= Drive/Partition Info =============================

Disks info: ____________________________________________________________________

nvme0n1	: is-GPT,	no-BIOSboot,	has---ESP, 	not-usb,	not-mmc, has-os,	has-win,	2048 sectors * 512 bytes
sda	: is-GPT,	no-BIOSboot,	has---ESP, 	usb-disk,	not-mmc, no-os,	no-wind,	40 sectors * 512 bytes

Partitions info (1/3): _________________________________________________________

nvme0n1p1	: no-os,	64, nopakmgr,	no-docgrub,	nogrub,	nogrubinstall,	no-grubenv,	noupdategrub,	not-far
nvme0n1p3	: is-os,	64, nopakmgr,	no-docgrub,	nogrub,	nogrubinstall,	no-grubenv,	noupdategrub,	farbios
nvme0n1p4	: no-os,	64, nopakmgr,	no-docgrub,	nogrub,	nogrubinstall,	no-grubenv,	noupdategrub,	farbios
sda1	: no-os,	64, nopakmgr,	no-docgrub,	nogrub,	nogrubinstall,	no-grubenv,	noupdategrub,	not-far

Partitions info (2/3): _________________________________________________________

nvme0n1p1	: is---ESP,	part-has-no-fstab,	no-nt,	no-winload,	no-recov-nor-hid,	no-bmgr,	notwinboot
nvme0n1p3	: isnotESP,	part-has-no-fstab,	no-nt,	haswinload,	no-recov-nor-hid,	no-bmgr,	notwinboot
nvme0n1p4	: isnotESP,	part-has-no-fstab,	no-nt,	no-winload,	recovery-or-hidden,	no-bmgr,	notwinboot
sda1	: is---ESP,	part-has-no-fstab,	no-nt,	no-winload,	no-recov-nor-hid,	no-bmgr,	notwinboot

Partitions info (3/3): _________________________________________________________

nvme0n1p1	: not--sepboot,	no---boot,	part-has-no-fstab,	not-sep-usr,	no---usr,	part-has-no-fstab,	no--grub.d,	nvme0n1
nvme0n1p3	: not--sepboot,	no---boot,	part-has-no-fstab,	not-sep-usr,	no---usr,	part-has-no-fstab,	no--grub.d,	nvme0n1
nvme0n1p4	: not--sepboot,	no---boot,	part-has-no-fstab,	not-sep-usr,	no---usr,	part-has-no-fstab,	no--grub.d,	nvme0n1
sda1	: not--sepboot,	no---boot,	part-has-no-fstab,	not-sep-usr,	no---usr,	part-has-no-fstab,	no--grub.d,	sda

fdisk -l (filtered): ___________________________________________________________

Disk nvme0n1: 931.5 GiB, 1000204886016 bytes, 1953525168 sectors
Disk identifier: 29C12E1D-8533-48DA-9F7B-81F58223903B
               Start        End    Sectors   Size Type
nvme0n1p1       2048     206847     204800   100M EFI System
nvme0n1p2     206848     239615      32768    16M Microsoft reserved
nvme0n1p3     239616 1952477836 1952238221 930.9G Microsoft basic data
nvme0n1p4 1952479232 1953521663    1042432   509M Windows recovery environment
Disk sda: 14.6 GiB, 15682240512 bytes, 30629376 sectors
Disk identifier: B15F4453-D255-4366-A90C-FA172B3CE857
       Start      End  Sectors  Size Type
sda1      40   409639   409600  200M EFI System
sda2  411648 30627839 30216192 14.4G Microsoft basic data
Disk zram0: 498 MiB, 522121216 bytes, 127471 sectors
Disk zram1: 498 MiB, 522121216 bytes, 127471 sectors
Disk zram2: 498 MiB, 522121216 bytes, 127471 sectors
Disk zram3: 498 MiB, 522121216 bytes, 127471 sectors
Disk zram4: 498 MiB, 522121216 bytes, 127471 sectors
Disk zram5: 498 MiB, 522121216 bytes, 127471 sectors
Disk zram6: 498 MiB, 522121216 bytes, 127471 sectors
Disk zram7: 498 MiB, 522121216 bytes, 127471 sectors
Disk zram8: 498 MiB, 522121216 bytes, 127471 sectors
Disk zram9: 498 MiB, 522121216 bytes, 127471 sectors
Disk zram10: 498 MiB, 522121216 bytes, 127471 sectors
Disk zram11: 498 MiB, 522121216 bytes, 127471 sectors
Disk zram12: 498 MiB, 522121216 bytes, 127471 sectors
Disk zram13: 498 MiB, 522121216 bytes, 127471 sectors
Disk zram14: 498 MiB, 522121216 bytes, 127471 sectors
Disk zram15: 498 MiB, 522121216 bytes, 127471 sectors

parted -lm (filtered): _________________________________________________________

sda:15.7GB:scsi:512:512:gpt:SanDisk Cruzer Glide:;
1:20.5kB:210MB:210MB:fat32:EFI System Partition:boot, esp;
2:211MB:15.7GB:15.5GB:fat32::msftdata;
nvme0n1:1000GB:nvme:512:512:gpt:Samsung SSD 970 EVO Plus 1TB:;
1:1049kB:106MB:105MB:fat32:EFI system partition:boot, esp;
2:106MB:123MB:16.8MB::Microsoft reserved partition:msftres;
3:123MB:1000GB:1000GB:ntfs:Basic data partition:msftdata;
4:1000GB:1000GB:534MB:ntfs::hidden, diag;

blkid (filtered): ______________________________________________________________

NAME        FSTYPE   UUID                                 PARTUUID                             LABEL      PARTLABEL
sda                                                                                                       
├─sda1      vfat     67E3-17ED                            6416eb57-93cc-49c4-b984-15c122ebb687 EFI        EFI System Partition
└─sda2      vfat     80AD-07EB                            27022a3b-4b22-4b9f-a310-76210e010a7d BOOTREPAIR 
nvme0n1                                                                                                   
├─nvme0n1p1 vfat     64A6-DFB4                            6d982ca9-5870-412b-88a6-8e58945248ea            EFI system partition
├─nvme0n1p2                                               08f55289-e6eb-40c6-839a-6d3f52adb76b            Microsoft reserved partition
├─nvme0n1p3 ntfs     3EE8A796E8A74B4B                     e9e4c9ce-32a2-4dd4-9089-d95963f91fe4            Basic data partition
└─nvme0n1p4 ntfs     50F81DEBF81DCFD8                     7f52d860-fcef-44b2-9630-6c0d52198841            

Mount points (filtered): _______________________________________________________

                Avail Use% Mounted on
/dev/nvme0n1p1  69.4M  28% /mnt/boot-sav/nvme0n1p1
/dev/nvme0n1p3 520.2G  44% /mnt/boot-sav/nvme0n1p3
/dev/nvme0n1p4  88.3M  83% /mnt/boot-sav/nvme0n1p4
/dev/sda1      196.9M   0% /mnt/boot-sav/sda1
/dev/sda2       13.5G   7% /cdrom

Mount options (filtered): ______________________________________________________


====================== sda2/boot/grub/grub.cfg (filtered) ======================

Boot-Repair-Disk session
Boot-Repair-Disk session (failsafe)

========================= sda2/syslinux.cfg (filtered) =========================

default menu.c32
prompt 0
menu title UNetbootin
timeout 100
label unetbootindefault
menu label Default
kernel /ubnkern
append initrd=/ubninit file=/cdrom/preseed/lubuntu.seed boot=casper quiet splash ---
label ubnentry0
menu label ^Help
kernel /ubnkern
append initrd=/ubninit 
label ubnentry1
menu label ^64bit session
kernel /casper/vmlinuz
append initrd=/casper/initrd file=/cdrom/preseed/lubuntu.seed boot=casper  quiet splash ---
label ubnentry2
menu label ^64bit session (failsafe)
kernel /casper/vmlinuz
append initrd=/casper/initrd file=/cdrom/preseed/lubuntu.seed boot=casper  noapic noapm nodma nomce nolapic nomodeset nosmp vga=normal ---
label ubnentry3
menu label Boot-Repair-Disk session
kernel /casper/vmlinuz
append initrd=/casper/initrd file=/cdrom/preseed/lubuntu.seed boot=casper quiet splash --
label ubnentry4
menu label Boot-Repair-Disk session (failsafe)
kernel /casper/vmlinuz
append initrd=/casper/initrd file=/cdrom/preseed/lubuntu.seed boot=casper noapic noapm nodma nomce nolapic nomodeset nosmp vga=normal --

==================== sda2: Location of files loaded by Grub ====================

           GiB - GB             File                                 Fragment(s)
            ?? = ??             boot/grub/grub.cfg                             1

================== sda2: Location of files loaded by Syslinux ==================

           GiB - GB             File                                 Fragment(s)
            ?? = ??             syslinux.cfg                                   1
            ?? = ??             ldlinux.sys                                    1
            ?? = ??             menu.c32                                       1

=============== sda2: Version of COM32(R) files used by Syslinux ===============

 menu.c32                           :  COM32R module (v4.xx)

======================== Unknown MBRs/Boot Sectors/etc =========================


/dev/nvme0n1p1: unknown GPT attributes
8000000000000000

/dev/nvme0n1p2: unknown GPT attributes
8000000000000000

/dev/nvme0n1p4: unknown GPT attributes
8000000000000001
Unknown BootLoader on sda1




Suggested repair: ______________________________________________________________

The default repair of the Boot-Repair utility would not act on the MBR.
Additional repair would be performed:  win-legacy-basic-fix

```

Ubuntu logs when powering down from Boot Repair Disk

```cmd 
  42.740216 shutdown[1]: Failed to wait for process: Protocol error
  42.741484 shutdown[1]: Failed to wait for process: Protocol error
  42.744063 shutdown[1]: Failed to wait for process: Protocol error
  42.744693 shutdown[1]: Failed to wait for process: Protocol error
  42.746076 shutdown[1]: Failed to wait for process: Protocol error
  42.746911 shutdown[1]: Failed to wait for process: Protocol error
  44.555753 usb usb3-port1: couldn't allocate usb_device
```
