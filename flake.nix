{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = {
    self,
    nixpkgs,
    flake-utils,
  }:
    flake-utils.lib.eachDefaultSystem (system: let
      pkgs = import nixpkgs {inherit system;};
      nodePackages = pkgs.recurseIntoAttrs pkgs.nodePackages;
    in
      with pkgs; {
        devShell = mkShell {
          buildInputs = with pkgs;
            [
              bash-language-server
              prettierd
            ]
            ++ (with nodePackages; [
              typescript-language-server
            ]);
        };
      });
}
